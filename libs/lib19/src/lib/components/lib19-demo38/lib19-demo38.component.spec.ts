import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib19Demo38Component } from './lib19-demo38.component';

describe('Lib19Demo38Component', () => {
  let component: Lib19Demo38Component;
  let fixture: ComponentFixture<Lib19Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib19Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib19Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
