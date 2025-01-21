import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib8Demo22Component } from './lib8-demo22.component';

describe('Lib8Demo22Component', () => {
  let component: Lib8Demo22Component;
  let fixture: ComponentFixture<Lib8Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib8Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib8Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
