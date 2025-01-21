import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib86Demo22Component } from './lib86-demo22.component';

describe('Lib86Demo22Component', () => {
  let component: Lib86Demo22Component;
  let fixture: ComponentFixture<Lib86Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib86Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib86Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
