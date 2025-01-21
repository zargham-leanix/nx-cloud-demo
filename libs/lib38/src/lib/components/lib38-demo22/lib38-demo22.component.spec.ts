import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib38Demo22Component } from './lib38-demo22.component';

describe('Lib38Demo22Component', () => {
  let component: Lib38Demo22Component;
  let fixture: ComponentFixture<Lib38Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib38Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib38Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
