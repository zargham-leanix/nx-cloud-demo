import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib67Demo22Component } from './lib67-demo22.component';

describe('Lib67Demo22Component', () => {
  let component: Lib67Demo22Component;
  let fixture: ComponentFixture<Lib67Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib67Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib67Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
