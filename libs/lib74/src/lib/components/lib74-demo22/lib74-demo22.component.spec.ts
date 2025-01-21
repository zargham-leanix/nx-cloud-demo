import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib74Demo22Component } from './lib74-demo22.component';

describe('Lib74Demo22Component', () => {
  let component: Lib74Demo22Component;
  let fixture: ComponentFixture<Lib74Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib74Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib74Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
