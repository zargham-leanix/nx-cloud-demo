import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib31Demo22Component } from './lib31-demo22.component';

describe('Lib31Demo22Component', () => {
  let component: Lib31Demo22Component;
  let fixture: ComponentFixture<Lib31Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib31Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib31Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
