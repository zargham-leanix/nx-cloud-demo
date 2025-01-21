import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib19Demo7Component } from './lib19-demo7.component';

describe('Lib19Demo7Component', () => {
  let component: Lib19Demo7Component;
  let fixture: ComponentFixture<Lib19Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib19Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib19Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
