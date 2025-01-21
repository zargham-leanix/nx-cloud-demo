import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib33Demo22Component } from './lib33-demo22.component';

describe('Lib33Demo22Component', () => {
  let component: Lib33Demo22Component;
  let fixture: ComponentFixture<Lib33Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib33Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib33Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
