import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib82Demo22Component } from './lib82-demo22.component';

describe('Lib82Demo22Component', () => {
  let component: Lib82Demo22Component;
  let fixture: ComponentFixture<Lib82Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib82Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib82Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
