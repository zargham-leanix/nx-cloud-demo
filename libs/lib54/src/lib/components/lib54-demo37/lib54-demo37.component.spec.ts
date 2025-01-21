import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib54Demo37Component } from './lib54-demo37.component';

describe('Lib54Demo37Component', () => {
  let component: Lib54Demo37Component;
  let fixture: ComponentFixture<Lib54Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib54Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib54Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
