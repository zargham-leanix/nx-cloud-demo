import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib56Demo22Component } from './lib56-demo22.component';

describe('Lib56Demo22Component', () => {
  let component: Lib56Demo22Component;
  let fixture: ComponentFixture<Lib56Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib56Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib56Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
