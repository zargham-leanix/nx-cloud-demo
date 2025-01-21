import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib68Demo22Component } from './lib68-demo22.component';

describe('Lib68Demo22Component', () => {
  let component: Lib68Demo22Component;
  let fixture: ComponentFixture<Lib68Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib68Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib68Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
