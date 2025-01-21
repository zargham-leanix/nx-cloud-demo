import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib60Demo22Component } from './lib60-demo22.component';

describe('Lib60Demo22Component', () => {
  let component: Lib60Demo22Component;
  let fixture: ComponentFixture<Lib60Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib60Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib60Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
