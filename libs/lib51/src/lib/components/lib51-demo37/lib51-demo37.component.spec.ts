import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib51Demo37Component } from './lib51-demo37.component';

describe('Lib51Demo37Component', () => {
  let component: Lib51Demo37Component;
  let fixture: ComponentFixture<Lib51Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib51Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib51Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
