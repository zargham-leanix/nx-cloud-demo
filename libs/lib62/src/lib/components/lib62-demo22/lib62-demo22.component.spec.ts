import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib62Demo22Component } from './lib62-demo22.component';

describe('Lib62Demo22Component', () => {
  let component: Lib62Demo22Component;
  let fixture: ComponentFixture<Lib62Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib62Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib62Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
