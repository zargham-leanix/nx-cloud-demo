import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib54Demo22Component } from './lib54-demo22.component';

describe('Lib54Demo22Component', () => {
  let component: Lib54Demo22Component;
  let fixture: ComponentFixture<Lib54Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib54Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib54Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
