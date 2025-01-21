import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib94Demo22Component } from './lib94-demo22.component';

describe('Lib94Demo22Component', () => {
  let component: Lib94Demo22Component;
  let fixture: ComponentFixture<Lib94Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib94Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib94Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
