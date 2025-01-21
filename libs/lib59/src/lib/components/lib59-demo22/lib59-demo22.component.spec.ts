import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib59Demo22Component } from './lib59-demo22.component';

describe('Lib59Demo22Component', () => {
  let component: Lib59Demo22Component;
  let fixture: ComponentFixture<Lib59Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib59Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib59Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
