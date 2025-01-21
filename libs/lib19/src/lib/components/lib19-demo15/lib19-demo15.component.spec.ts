import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib19Demo15Component } from './lib19-demo15.component';

describe('Lib19Demo15Component', () => {
  let component: Lib19Demo15Component;
  let fixture: ComponentFixture<Lib19Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib19Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib19Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
