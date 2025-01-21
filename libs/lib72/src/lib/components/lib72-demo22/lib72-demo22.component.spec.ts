import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib72Demo22Component } from './lib72-demo22.component';

describe('Lib72Demo22Component', () => {
  let component: Lib72Demo22Component;
  let fixture: ComponentFixture<Lib72Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib72Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib72Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
