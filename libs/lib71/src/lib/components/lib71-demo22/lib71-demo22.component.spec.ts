import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib71Demo22Component } from './lib71-demo22.component';

describe('Lib71Demo22Component', () => {
  let component: Lib71Demo22Component;
  let fixture: ComponentFixture<Lib71Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib71Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib71Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
