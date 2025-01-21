import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib13Demo22Component } from './lib13-demo22.component';

describe('Lib13Demo22Component', () => {
  let component: Lib13Demo22Component;
  let fixture: ComponentFixture<Lib13Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib13Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib13Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
