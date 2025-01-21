import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib15Demo22Component } from './lib15-demo22.component';

describe('Lib15Demo22Component', () => {
  let component: Lib15Demo22Component;
  let fixture: ComponentFixture<Lib15Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib15Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib15Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
