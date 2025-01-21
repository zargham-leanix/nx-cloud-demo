import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib9Demo22Component } from './lib9-demo22.component';

describe('Lib9Demo22Component', () => {
  let component: Lib9Demo22Component;
  let fixture: ComponentFixture<Lib9Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib9Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib9Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
