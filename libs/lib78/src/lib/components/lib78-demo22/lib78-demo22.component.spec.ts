import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib78Demo22Component } from './lib78-demo22.component';

describe('Lib78Demo22Component', () => {
  let component: Lib78Demo22Component;
  let fixture: ComponentFixture<Lib78Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib78Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib78Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
