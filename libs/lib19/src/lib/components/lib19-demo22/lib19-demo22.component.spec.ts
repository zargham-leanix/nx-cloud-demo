import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib19Demo22Component } from './lib19-demo22.component';

describe('Lib19Demo22Component', () => {
  let component: Lib19Demo22Component;
  let fixture: ComponentFixture<Lib19Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib19Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib19Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
