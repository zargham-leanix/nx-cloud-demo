import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib50Demo4Component } from './lib50-demo4.component';

describe('Lib50Demo4Component', () => {
  let component: Lib50Demo4Component;
  let fixture: ComponentFixture<Lib50Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib50Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib50Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
