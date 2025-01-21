import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib21Demo22Component } from './lib21-demo22.component';

describe('Lib21Demo22Component', () => {
  let component: Lib21Demo22Component;
  let fixture: ComponentFixture<Lib21Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib21Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib21Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
