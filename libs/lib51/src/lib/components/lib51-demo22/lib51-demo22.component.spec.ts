import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib51Demo22Component } from './lib51-demo22.component';

describe('Lib51Demo22Component', () => {
  let component: Lib51Demo22Component;
  let fixture: ComponentFixture<Lib51Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib51Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib51Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
