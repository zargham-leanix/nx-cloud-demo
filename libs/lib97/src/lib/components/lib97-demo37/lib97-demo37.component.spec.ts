import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib97Demo37Component } from './lib97-demo37.component';

describe('Lib97Demo37Component', () => {
  let component: Lib97Demo37Component;
  let fixture: ComponentFixture<Lib97Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib97Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib97Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
