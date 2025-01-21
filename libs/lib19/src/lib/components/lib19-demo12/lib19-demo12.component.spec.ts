import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib19Demo12Component } from './lib19-demo12.component';

describe('Lib19Demo12Component', () => {
  let component: Lib19Demo12Component;
  let fixture: ComponentFixture<Lib19Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib19Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib19Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
