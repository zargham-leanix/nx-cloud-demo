import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib44Demo22Component } from './lib44-demo22.component';

describe('Lib44Demo22Component', () => {
  let component: Lib44Demo22Component;
  let fixture: ComponentFixture<Lib44Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib44Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib44Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
