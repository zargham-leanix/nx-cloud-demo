import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib16Demo46Component } from './lib16-demo46.component';

describe('Lib16Demo46Component', () => {
  let component: Lib16Demo46Component;
  let fixture: ComponentFixture<Lib16Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib16Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib16Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
