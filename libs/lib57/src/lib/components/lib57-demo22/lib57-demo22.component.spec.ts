import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib57Demo22Component } from './lib57-demo22.component';

describe('Lib57Demo22Component', () => {
  let component: Lib57Demo22Component;
  let fixture: ComponentFixture<Lib57Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib57Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib57Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
