import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib97Demo22Component } from './lib97-demo22.component';

describe('Lib97Demo22Component', () => {
  let component: Lib97Demo22Component;
  let fixture: ComponentFixture<Lib97Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib97Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib97Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
