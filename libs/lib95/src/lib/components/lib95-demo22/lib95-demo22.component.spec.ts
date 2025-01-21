import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib95Demo22Component } from './lib95-demo22.component';

describe('Lib95Demo22Component', () => {
  let component: Lib95Demo22Component;
  let fixture: ComponentFixture<Lib95Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib95Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib95Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
