import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib40Demo22Component } from './lib40-demo22.component';

describe('Lib40Demo22Component', () => {
  let component: Lib40Demo22Component;
  let fixture: ComponentFixture<Lib40Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib40Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib40Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
