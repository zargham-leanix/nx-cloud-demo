import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib76Demo22Component } from './lib76-demo22.component';

describe('Lib76Demo22Component', () => {
  let component: Lib76Demo22Component;
  let fixture: ComponentFixture<Lib76Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib76Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib76Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
