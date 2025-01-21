import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib14Demo22Component } from './lib14-demo22.component';

describe('Lib14Demo22Component', () => {
  let component: Lib14Demo22Component;
  let fixture: ComponentFixture<Lib14Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib14Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib14Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
