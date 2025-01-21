import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib69Demo37Component } from './lib69-demo37.component';

describe('Lib69Demo37Component', () => {
  let component: Lib69Demo37Component;
  let fixture: ComponentFixture<Lib69Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib69Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib69Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
