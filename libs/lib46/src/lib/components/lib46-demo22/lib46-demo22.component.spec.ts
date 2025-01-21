import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib46Demo22Component } from './lib46-demo22.component';

describe('Lib46Demo22Component', () => {
  let component: Lib46Demo22Component;
  let fixture: ComponentFixture<Lib46Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib46Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib46Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
