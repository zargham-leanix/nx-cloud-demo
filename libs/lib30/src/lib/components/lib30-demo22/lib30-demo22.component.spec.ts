import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib30Demo22Component } from './lib30-demo22.component';

describe('Lib30Demo22Component', () => {
  let component: Lib30Demo22Component;
  let fixture: ComponentFixture<Lib30Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib30Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib30Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
