import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib81Demo22Component } from './lib81-demo22.component';

describe('Lib81Demo22Component', () => {
  let component: Lib81Demo22Component;
  let fixture: ComponentFixture<Lib81Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib81Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib81Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
