import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib55Demo22Component } from './lib55-demo22.component';

describe('Lib55Demo22Component', () => {
  let component: Lib55Demo22Component;
  let fixture: ComponentFixture<Lib55Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib55Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib55Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
