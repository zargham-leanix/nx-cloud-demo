import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib23Demo22Component } from './lib23-demo22.component';

describe('Lib23Demo22Component', () => {
  let component: Lib23Demo22Component;
  let fixture: ComponentFixture<Lib23Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib23Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib23Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
