import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib22Demo22Component } from './lib22-demo22.component';

describe('Lib22Demo22Component', () => {
  let component: Lib22Demo22Component;
  let fixture: ComponentFixture<Lib22Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib22Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib22Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
