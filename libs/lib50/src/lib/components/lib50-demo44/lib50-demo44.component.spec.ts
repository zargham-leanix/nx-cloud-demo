import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib50Demo44Component } from './lib50-demo44.component';

describe('Lib50Demo44Component', () => {
  let component: Lib50Demo44Component;
  let fixture: ComponentFixture<Lib50Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib50Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib50Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
