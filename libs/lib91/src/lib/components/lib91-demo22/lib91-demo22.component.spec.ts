import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib91Demo22Component } from './lib91-demo22.component';

describe('Lib91Demo22Component', () => {
  let component: Lib91Demo22Component;
  let fixture: ComponentFixture<Lib91Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib91Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib91Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
