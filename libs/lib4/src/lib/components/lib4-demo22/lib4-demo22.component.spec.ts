import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib4Demo22Component } from './lib4-demo22.component';

describe('Lib4Demo22Component', () => {
  let component: Lib4Demo22Component;
  let fixture: ComponentFixture<Lib4Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib4Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib4Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
