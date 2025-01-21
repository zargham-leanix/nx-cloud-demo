import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib16Demo22Component } from './lib16-demo22.component';

describe('Lib16Demo22Component', () => {
  let component: Lib16Demo22Component;
  let fixture: ComponentFixture<Lib16Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib16Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib16Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
