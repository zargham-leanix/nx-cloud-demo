import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib1Demo22Component } from './lib1-demo22.component';

describe('Lib1Demo22Component', () => {
  let component: Lib1Demo22Component;
  let fixture: ComponentFixture<Lib1Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib1Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib1Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
