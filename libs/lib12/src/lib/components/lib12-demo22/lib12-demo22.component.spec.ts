import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib12Demo22Component } from './lib12-demo22.component';

describe('Lib12Demo22Component', () => {
  let component: Lib12Demo22Component;
  let fixture: ComponentFixture<Lib12Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib12Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib12Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
