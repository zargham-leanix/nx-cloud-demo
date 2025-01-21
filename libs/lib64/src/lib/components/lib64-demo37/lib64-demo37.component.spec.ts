import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib64Demo37Component } from './lib64-demo37.component';

describe('Lib64Demo37Component', () => {
  let component: Lib64Demo37Component;
  let fixture: ComponentFixture<Lib64Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib64Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib64Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
